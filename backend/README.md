Este repositorio contiene el backend de un proyecto realizado como requisito para la aprobación de las asignaturas Laboratorio de Computación III y IV, Programación III y Diseño y administración de base de datos de la Tecnicatura Universitaria en Programación de la Facultad Regional Venado Tuerto - Universidad Tecnológica Nacional a cargo de los profesores Celina Guzmán y Gustavo García.

El proyecto fue desarrollado en Spring Boot y usa una base de datos MySql o MariaDB.

Para ejecutar el proyecto, el sistema deberá tener una instalación de Xampp, Wamp o un programa similar. Ante la duda, es adecuado definir la validez del programa por la presencia de PhpMyAdmin en el mismo. Además, el sistema necesitará una instalación de Java 17 o superior y Maven.

Una vez instalado este programa, se deberá acceder a PhpMyAdmin e importar el archivo datasource-schema.sql para inicializar la base de datos. En caso de requerir datos de ejemplo, puede importarse también el archivo datasource-example.sql.

Una vez cumplidos los requisitos, se recomienda, para su conveniencia, usar el comando "mvn install" en la carpeta backend. Este comando generará un archivo ejecutable .jar el carpeta target, que podrá ser ejecutado con el comando "java -jar backend-0.0.1-SNAPSHOT.jar".
