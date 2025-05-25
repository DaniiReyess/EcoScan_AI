# EcoScan AI: Clasificación de Residuos con Inteligencia Artificial

Este proyecto tiene como objetivo **facilitar la correcta separación de residuos sólidos** mediante inteligencia artificial, identificando en tiempo real la categoría y el contenedor indicado de un residuo a partir de una imagen capturada con la cámara del dispositivo.

<p align="center">
  <img src="https://github.com/user-attachments/assets/33e785ed-37f9-444c-80ab-4cafb5d0026a1" width="500"/>
</p>


---

## Descripción General

**EcoScan AI** es una aplicación web que funciona directamente en el navegador, aprovechando la capacidad de **TensorFlow.js** para la predicción de categorías de residuos sin depender de servidores externos. Utiliza un **modelo de clasificación de residuos preentrenado** y un flujo de trabajo en tiempo real, buscando contribuir a la sostenibilidad ambiental y fomentar la conciencia sobre el manejo responsable de residuos. El sistema emplea **Ngrok** como herramienta de túnel para exponer la aplicación localmente durante las demostraciones.

El proyecto **EcoScan AI** se basa en el **código de colores oficial para la separación de residuos sólidos en Colombia**, que entró en vigor el 1 de enero de 2021. Según este sistema, los residuos se clasifican en:

- **Residuos aprovechables** (contenedor blanco):  
  Plástico, cartón, vidrio, papel y metales.

- **Residuos orgánicos aprovechables** (contenedor verde):  
  Restos de comida y desechos agrícolas.

- **Residuos no aprovechables** (contenedor negro):  
  Papel higiénico, servilletas, residuos contaminados con comida, papeles metalizados y residuos Covid-19.

La clasificación de residuos en Colombia busca facilitar el aprovechamiento de materiales reciclables y contribuir a la sostenibilidad ambiental. EcoScan AI incorpora esta clasificación en la interfaz y en las predicciones del modelo, guiando al usuario para una correcta disposición de los residuos.

<p align="center">
  <img src="https://github.com/user-attachments/assets/2e979942-6920-4997-a381-5e7e90325aa1" width="500"/>
</p>

### Características principales

- Clasificación de residuos en tiempo real desde la cámara.
- Predicción instantánea en el navegador, sin conexión a servidores externos.
- Interfaz web amigable y educativa.
- Compatible con navegadores modernos (Chrome, Firefox, Edge, Safari).
---

## Tecnologías utilizadas

- HTML, CSS y JavaScript
- TensorFlow.js
- Google Colab (entrenamiento del modelo de inteligencia artificial)
- Python (para servidor local con HTTP y configuración de Ngrok)
- Ngrok

---

## Arquitectura del Sistema

<p align="center">
  <img src="https://github.com/user-attachments/assets/b1765b17-a20f-4e42-ba21-c78de9ad4025" width="250"/>
</p>

El sistema se basa en un esquema de **cliente web ligero**, con los siguientes componentes:

- **Frontend**: HTML, CSS y JavaScript.
- **Modelo de IA**: basado en el modelo de Kaggle [Garbage Classification](https://www.kaggle.com/code/lilearn004205/garbage-classification-t-u) convertido a TensorFlow.js, que fue entrenando en Google Colab.
- **Servidor local**: HTTP simple con Python.
- **Exposición a internet**: Ngrok.

---
## Proceso de desarrollo

1. **Limpieza y organización del dataset:**  
   Se realizó la recolección y clasificación de las imágenes de residuos con dataset de la web, asegurando la calidad y representatividad de cada categoría.

2. **Entrenamiento del modelo de clasificación:**  
   El modelo de IA fue entrenado en **Google Colab** a partir de las imágenes preprocesadas y balanceadas, utilizando **TensorFlow** y **Keras**.

3. **Conversión del modelo a TensorFlow.js:**  
   Se exportó el modelo entrenado en formato **.h5** y se convirtió a **TensorFlow.js** para permitir la ejecución en el navegador.

4. **Implementación del modelo en la aplicación web:**  
   Se integró el modelo de IA con la interfaz web desarrollada en **HTML**, **CSS** y **JavaScript**, utilizando la cámara del dispositivo para capturar imágenes.

5. **Exposición de la aplicación:**  
   Durante las pruebas y demostraciones, se utilizó **Ngrok** como túnel para exponer la aplicación localmente y permitir el acceso remoto.

6. **Evaluación del rendimiento:**  
   Se analizaron las métricas de pérdida y exactitud, y se realizaron ajustes adicionales para mejorar la validación del modelo, logrando un desempeño confiable.

---

## Entrenamiento y Evaluación del Modelo

El modelo de inteligencia artificial de EcoScan AI fue entrenado en Kaggle utilizando el dataset [Garbage Classification Dataset](https://www.kaggle.com/datasets/mostafaabla/garbage-classification/data). Durante el proceso de entrenamiento, enfrentamos algunos inconvenientes relacionados con la dificultad para aumentar la exactitud de validación del modelo. Inicialmente, los valores de validación no superaban el 50 %, y el modelo no lograba generalizar correctamente las predicciones en imágenes nuevas.

Sin embargo, gracias a la exploración de recursos adicionales y la implementación de técnicas recomendadas en la comunidad de Kaggle, como el ajuste de hiperparámetros, el uso de callbacks (EarlyStopping y ReduceLROnPlateau) y la normalización adecuada de las imágenes, logramos superar estos obstáculos. Finalmente, se alcanzó un porcentaje de validación que ronda el 85 %, lo que permitió que el modelo tuviera un desempeño satisfactorio y confiable.

El modelo se desarrolló en **Google Colab** utilizando bibliotecas como **TensorFlow** y **Keras** para el entrenamiento y ajuste fino. Posteriormente, se exportó y convirtió a **TensorFlow.js** para integrarlo directamente en el navegador, permitiendo predicciones en tiempo real sin necesidad de conexión a servidores externos.

A continuación, se presentan las gráficas clave que resumen el rendimiento del modelo y su capacidad de generalización:
### Matriz de confusión normalizada
<p align="center">
  <img src="https://github.com/user-attachments/assets/8ea21359-8b20-4644-a0f0-1941530f1195" width="500"/>
</p>

*Ilustración. Matriz de confusión normalizada que muestra el desempeño del modelo en la clasificación de residuos.*

### Mapa de activaciones de la red
<p align="center">
  <img src="https://github.com/user-attachments/assets/a8a80f54-210f-4c2b-8053-5d5e73b1babf" width="500"/>
</p>

*Ilustración. Mapa de activaciones que resalta las regiones más relevantes de la imagen durante la predicción.*

### Ejemplo de predicción real
<p align="center">
  <img src="https://github.com/user-attachments/assets/57e41e5b-6c0d-44f4-9ee5-a54f978e179e" width="500"/>
</p>

*Ilustración. Ejemplo de predicción del modelo sobre una prenda de ropa, mostrando la categoría “clothes” con alta probabilidad.*

### Gráficas de Entrenamiento

<p align="center">
  <img src="https://github.com/user-attachments/assets/8d8d9752-c093-4971-9165-184f961f2830" width="500"/>
</p>

*Ilustración. Evolución de la pérdida durante el entrenamiento.*

<p align="center">
  <img src="https://github.com/user-attachments/assets/75b379fe-1b8d-4b0e-887b-386d5c429c51" width="500"/>
</p>

*Ilustración. Evolución de la exactitud durante el entrenamiento.*

---

## Funcionamiento del Software

1. **Acceso a la aplicación web** desde el navegador.
2. **Permiso de cámara** para capturar imágenes del residuo.
3. La imagen se preprocesa (redimensionada y convertida a escala de grises).
4. El **modelo de IA** predice la categoría del residuo.
5. El resultado se muestra en la interfaz en tiempo real.

---

## Interfaz de la página web

La interfaz de EcoScan AI fue diseñada utilizando **HTML**, **CSS** y el framework **Bootstrap** para lograr un diseño responsivo, moderno y claro para los usuarios. Gracias a Bootstrap, los elementos como botones, contenedores y navegación se ajustan automáticamente a diferentes tamaños de pantalla, garantizando una experiencia uniforme en distintos dispositivos.

El núcleo funcional de la aplicación se integra mediante un archivo **`script.js`**, que se encarga de procesar la captura de la cámara y conectar con el modelo de **TensorFlow.js** en el navegador. Esto permite realizar predicciones en tiempo real sin depender de servidores externos, ofreciendo un sistema rápido y seguro.

A continuación, se muestran capturas reales de la interfaz:

<p align="center">
  <img src="https://github.com/user-attachments/assets/ff1e7cfd-0a5d-4242-ab8f-a2a42e21fc1c" width="800"/>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/f9513c5e-d307-4ff3-81a8-36f74b8f123f" width="800"/>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/88847c6d-eea5-4cd9-9c7e-a04fb54e2a29" width="800"/>
</p>

Cada vista guía al usuario paso a paso: desde la bienvenida e introducción, pasando por el escaneo en vivo con la cámara y hasta la presentación de los resultados, que incluyen la categoría del residuo y el color de contenedor recomendado según la normativa colombiana.

---

## Recomendaciones de Uso

- Utiliza la aplicación en un entorno bien iluminado.
- Mantén la cámara enfocada y estable.
- Evita fondos con objetos distractores, preferiblemente que el fondo sea unicolor.
- Revisa los permisos del navegador para habilitar la cámara correctamente.

---

## Licencia

Este proyecto fue desarrollado con fines académicos y con un alcance de **pruebas exclusivamente académicas** en la **Universidad Santo Tomás, Facultad de Ingeniería de Telecomunicaciones**, como parte del **Proyecto Integrador 2025-01**. Es un proyecto a baja escala, sin fines comerciales ni de explotación tecnológica.

---

## Contacto

Para consultas o soporte técnico, puedes escribirnos a:  
📧 juanesteban.paez@ustabuca.edu.co
📧 danielaalejandra.reyes@ustabuca.edu.co

---

## Referencias

- Ngrok. (s. f.). *Ngrok documentation*. https://ngrok.com/docs  
- TensorFlow. (s. f.). *TensorFlow.js*. https://www.tensorflow.org/js?hl=es-419  
- Mostafaabla. (s. f.). *Garbage classification* [Dataset]. Kaggle. https://www.kaggle.com/datasets/mostafaabla/garbage-classification/data  
- Lilearn004205. (s. f.). *Garbage classification T-U* [Notebook]. Kaggle. https://www.kaggle.com/code/lilearn004205/garbage-classification-t-u  
- Russell, S., & Norvig, P. (2021). *Artificial Intelligence: A Modern Approach* (4.ª ed.). Pearson.

---
