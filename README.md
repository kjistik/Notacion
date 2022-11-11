# Notacion

Para ejecutar el proyecto, debe tenerse una instalación de docker en el sistema.

Como preparación para la ejecución, debe ejecutarse el comando "docker run -p 3307:3306 --name mariadb -e MARIADB_ROOT_PASSWORD=kjistik_docker -e MARIADB_DATABASE=notacion_docker -e MYSQL_AUTO_UPGRADE=true -e MARIADB_USER=notacion_docker -e MARIADB_PASSWORD=TheCakeIsaLie -v /opt/data/:/var/lib/mysql mariadb". Luego de ejecutar el comando. Se deberá acceder a la base de datos usando MySQL Workbench, DBeaver o una herramienta similar. La base de datos estará disponible en el puerto 3307. Será necesario importar el archivo "notacion-schema.sql" y, si se desea tener datos de ejemplo, "notacion-example.sql". El contenedor creado para este paso podrá ser eliminado si se desea y no tendrá consecuencias para el funcionamiento del programa.

Una vez cumplidos los pasos anteriores, deberá abrirse el directorio Notacion en consola y ejecutar el comando "docker-compose up". A partir de este momento, el programa podrá iniciarse en cualquier momento usando el mismo comando
