DROP DATABASE IF EXISTS monitor;
CREATE DATABASE monitor;
USE monitor;

SET NAMES utf8 ;
SET character_set_client = utf8mb4 ;

CREATE TABLE devs (
                           id_dev int(4) NOT NULL AUTO_INCREMENT,
                           email varchar(100) NOT NULL,
                           pass varchar(100) NOT NULL,
                           PRIMARY KEY (id_dev)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE apps (
                         id_app int(5) NOT NULL AUTO_INCREMENT,
                         id_dev int(4) NOT NULL,
                         name varchar(100) NOT NULL,
                         basepath varchar(100) NOT NULL,
                         refresh_rate int(3) NOT NULL,
                         final_status varchar(6) NOT NULL,
                         PRIMARY KEY (id_app),
                         CONSTRAINT fk_apps_devs FOREIGN KEY (id_dev) REFERENCES devs (id_dev) ON DELETE CASCADE,
                         CONSTRAINT ck_apps CHECK (apps.final_status IN ('green', 'yellow', 'red'))
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE app_endpoints (
                      id_endp int(5) NOT NULL AUTO_INCREMENT,
                      id_app int(5) NOT NULL,
                      path varchar(100) NOT NULL,
                      PRIMARY KEY (id_endp),
                      CONSTRAINT fk_endpoints_apps FOREIGN KEY (id_app) REFERENCES apps (id_app) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE endp_data (
                      id_endp int(5) NOT NULL,
                      time_snap date DEFAULT CURRENT_TIMESTAMP,
                      status int(3) NOT NULL,
                      PRIMARY KEY (id_endp, time_snap),
                      CONSTRAINT fk_endp_data_endpoints FOREIGN KEY (id_endp) REFERENCES app_endpoints (id_endp) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE bug_reports (
                           id_bug int(5) NOT NULL AUTO_INCREMENT,
                           id_app int(5) NOT NULL,
                           description varchar(1000) NOT NULL,
                           PRIMARY KEY (id_bug),
                           CONSTRAINT fk_bug_apps FOREIGN KEY (id_app) REFERENCES apps (id_app) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
